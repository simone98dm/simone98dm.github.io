import type { IProject } from './project';
import type { ISkill } from './skill';

export interface IAbout {
	paragraphs: string[];
	skills: ISkill[];
	projects: IProject[];
}
