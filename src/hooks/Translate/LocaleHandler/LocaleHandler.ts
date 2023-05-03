import { ILocale, Locale } from '@rove-team/locale';
import { persianResource } from '../Locales/fa-ir';
import { Language } from '../TranslateType';

export class LocaleHandler implements ILocale {
  private static instance: LocaleHandler;

  private locale!: Locale;

  private constructor() {}

  public static getInstance(language: Language): LocaleHandler {
    if (!LocaleHandler.instance) {
      LocaleHandler.instance = new LocaleHandler();
      LocaleHandler.instance.locale = new Locale({
        language,
        localeObject: {
          [Language.PERSIAN]: persianResource,
        },
      });
    }

    return LocaleHandler.instance;
  }

  public getCollection(chain: string): ILocale {
    return this.locale.getCollection(chain);
  }

  public translate(key: string, stringFormatData?: string[]): string {
    return this.locale.translate(key, stringFormatData);
  }
}
