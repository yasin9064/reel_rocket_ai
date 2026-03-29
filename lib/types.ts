export type Platform = "instagram" | "youtube" | "tiktok";

export type ScriptStyle =
  | "Educational"
  | "Storytelling"
  | "Motivational"
  | "Funny"
  | "Controversial"
  | "Luxury"
  | "Dark Psychology"
  | "Faceless Documentary";

export type Duration = 15 | 30 | 60;

export interface GenerateScriptRequest {
  topic: string;
  platform: Platform;
  style: ScriptStyle;
  duration: Duration;
  niche?: string;
  targetAudience?: string;
}

export interface ScriptSegment {
  timestamp: string;
  text: string;
}

export interface GenerateScriptResponse {
  hook: string;
  script: ScriptSegment[];
  shots: string[];
  caption: string;
  hashtags: string[];
  cta: string;
}
