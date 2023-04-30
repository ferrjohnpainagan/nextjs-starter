import { LocaleHandler } from './LocaleHandler/LocaleHandler';
import { ITranslateFunction, Language } from './TranslateType';

export const useTranslate = (chain: string): ITranslateFunction => {
  const language: Language = Language.PERSIAN;
  const locale: LocaleHandler = LocaleHandler.getInstance(language);

  const collection = locale.getCollection(chain);

  return (key: string, stringFormatData?: string[]): string => {
    return collection.translate(key, stringFormatData);
  };
};
