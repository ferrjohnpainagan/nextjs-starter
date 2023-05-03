export enum Language {
  PERSIAN = 'fa-ir',
}

export interface ITranslateFunction {
  (key: string, stringFormatData?: string[]): string;
}
