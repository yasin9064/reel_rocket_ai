import OpenAI from "openai";
import { NextResponse } from "next/server";
import type { GenerateScriptRequest, GenerateScriptResponse } from "@/lib/types";

// Lazy initialization to avoid build-time errors when API key is not set
function getClient() {
  return new OpenAI({
    baseURL: "https://integrate.api.nvidia.com/v1",
    apiKey: process.env.NVIDIA_API_KEY,
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GenerateScriptRequest;

    const { topic, platform, style, duration, niche, targetAudience } = body;

    // Validation
    if (!topic || typeof topic !== "string" || topic.trim().length === 0) {
      return NextResponse.json(
        { error: "Topic is required" },
        { status: 400 }
      );
    }

    if (topic.trim().length > 200) {
      return NextResponse.json(
        { error: "Topic must be 200 characters or less" },
        { status: 400 }
      );
    }

    if (!platform || !["instagram", "youtube", "tiktok"].includes(platform)) {
      return NextResponse.json(
        { error: "Invalid platform" },
        { status: 400 }
      );
    }

    const validStyles = [
      "Educational",
      "Storytelling",
      "Motivational",
      "Funny",
      "Controversial",
      "Luxury",
      "Dark Psychology",
      "Faceless Documentary",
    ];
    if (!style || !validStyles.includes(style)) {
      return NextResponse.json(
        { error: "Invalid style" },
        { status: 400 }
      );
    }

    if (![15, 30, 60].includes(duration)) {
      return NextResponse.json(
        { error: "Duration must be 15, 30, or 60 seconds" },
        { status: 400 }
      );
    }

    const systemPrompt = `You are an expert viral short-form video script writer for ${platform === "instagram" ? "Instagram Reels" : platform === "youtube" ? "YouTube Shorts" : "TikTok"}.

Given a topic, target audience, and style, generate a complete viral script package optimized for maximum engagement and retention.

Return ONLY valid JSON with this exact structure — no markdown, no explanation, just the JSON:
{
  "hook": "string (1-2 punchy opening sentences that stop the scroll, max 15 words)",
  "script": [
    { "timestamp": "0:00", "text": "first segment text..." },
    { "timestamp": "0:05", "text": "second segment..." }
  ],
  "shots": ["shot direction 1", "shot direction 2", "shot direction 3"],
  "caption": "engaging caption optimized for the platform, 150 chars max",
  "hashtags": ["#hashtag1", "#hashtag2", "#hashtag3", "#hashtag4", "#hashtag5"],
  "cta": "call to action, 1 sentence"
}

Rules:
- Total script must fit exactly ${duration} seconds when read at a natural pace
- The hook MUST be in the first 0-${duration <= 15 ? "3" : "5"} seconds
- Style: ${style}
- Platform: ${platform === "instagram" ? "Instagram Reels" : platform === "youtube" ? "YouTube Shorts" : "TikTok"}
- Make it scroll-stopping, emotional, and shareable
- Shots should be simple, actionable directions a creator can follow`;

    const userPrompt = `Topic: ${topic}${niche ? `\nNiche: ${niche}` : ""}${targetAudience ? `\nTarget Audience: ${targetAudience}` : ""}`;

    const completion = await getClient().chat.completions.create({
      model: "deepseek-ai/deepseek-v3.1",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.9,
      max_tokens: 4096,
    });

    const raw = completion.choices[0]?.message?.content;

    if (!raw) {
      return NextResponse.json(
        { error: "Failed to generate script. Please try again." },
        { status: 500 }
      );
    }

    let parsed: GenerateScriptResponse;
    try {
      parsed = JSON.parse(raw) as GenerateScriptResponse;
    } catch {
      return NextResponse.json(
        { error: "Failed to parse generated script. Please try again." },
        { status: 500 }
      );
    }

    // Basic validation of the response structure
    if (
      !parsed.hook ||
      !parsed.script ||
      !Array.isArray(parsed.script) ||
      !parsed.shots ||
      !Array.isArray(parsed.shots) ||
      !parsed.caption ||
      !parsed.hashtags ||
      !Array.isArray(parsed.hashtags) ||
      !parsed.cta
    ) {
      return NextResponse.json(
        { error: "Generated script had an invalid format. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(parsed);
  } catch (err) {
    console.error("Script generation error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
