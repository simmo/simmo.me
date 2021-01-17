export const enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export const enum ProjectType {
  Package = 'NPM',
  Site = 'Project',
}

export type Project = {
  type: ProjectType;
  name: string;
  from: Date;
  to?: Date;
};
