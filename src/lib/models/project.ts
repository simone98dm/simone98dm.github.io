export interface IProject {
	title: string;
	description: string;
	links: ILink[];
	iconcode: string;
}

export interface ILink {
	url: string;
	displayText: string;
}
