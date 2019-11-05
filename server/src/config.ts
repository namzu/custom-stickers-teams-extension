/**
 * 配置
 */
export const Config = {
    PORT: process.env.PORT || process.env.port || 3007,

    HOSTNAME: process.env.HOSTNAME,
    WEB_HOST: process.env.WEB_HOST,
    WEB_CONFIG_PATH: process.env.WEB_CONFIG_PATH || "/config",
    BOT_API_ENDPONT: process.env.BOT_API_ENDPONT || "/bot/messages",

    TOKEN_ENCRYPT_KEY: process.env.TOKEN_ENCRYPT_KEY,

    MICROSOFT_APP_ID: process.env.MICROSOFT_APP_ID || "963a3218-68a8-4a64-bd82-988a02788cfb",
    MICROSOFT_APP_PASSWORD: process.env.MICROSOFT_APP_PASSWORD,

    AZURE_STORAGE_ACCOUNT_NAME: process.env.AZURE_STORAGE_ACCOUNT_NAME,
    AZURE_STORAGE_ACCOUNT_ACCESS_KEY: process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY,
    AZURE_STORAGE_CDN: process.env.AZURE_STORAGE_CDN,
    AZURE_STORAGE_CONTAINER: process.env.AZURE_STORAGE_CONTAINER || "stickers",

    APPINSIGHTS_INSTRUMENTATIONKEY: process.env.APPINSIGHTS_INSTRUMENTATIONKEY,
} as const;
