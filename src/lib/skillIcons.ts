import type { ComponentType } from "react";
import { Activity, Database, Globe, Zap } from "lucide-react";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiC,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiJavascript,
  SiKeras,
  SiLinux,
  SiOpencv,
  SiPandas,
  SiPostman,
  SiPython,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";

export type SkillIcon = ComponentType<{
  size?: number | string;
  className?: string;
}>;

const skillIcons: Record<string, SkillIcon> = {
  Python: SiPython,
  "C++": SiCplusplus,
  C: SiC,
  "C#": TbBrandCSharp,
  JavaScript: SiJavascript,
  SQL: Database,
  Git: SiGit,
  Linux: SiLinux,
  Docker: SiDocker,
  Postman: SiPostman,
  Flask: SiFlask,
  FastAPI: SiFastapi,
  "Scikit-learn": SiScikitlearn,
  Pandas: SiPandas,
  Matplotlib: Activity,
  Seaborn: Activity,
  XGBoost: Zap,
  PyTorch: SiPytorch,
  Keras: SiKeras,
  OpenCV: SiOpencv,
};

export function getSkillIcon(skill: string): SkillIcon {
  return skillIcons[skill] ?? Globe;
}
