import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns the plural form of a word based on the count.
 * Applies basic English pluralization rules or uses a custom plural form if provided.
 *
 * @param word - The word to pluralize
 * @param count - The number determining singular or plural form
 * @param pluralForm - Optional custom plural form
 * @returns The appropriate singular or plural form
 *
 * @example
 * pluralize('cat', 1) // 'cat'
 * pluralize('cat', 2) // 'cats'
 * pluralize('child', 2, 'children') // 'children'
 */
export function pluralize(word: string, count: number, pluralForm?: string): string {
  if (count === 1) return word;
  if (pluralForm) return pluralForm;

  const lowerWord = word.toLowerCase();

  if (lowerWord.endsWith("y") && !/[aeiou]y$/.test(lowerWord)) {
    return `${word.slice(0, -1)}ies`;
  }

  if (/(s|x|z|ch|sh)$/.test(lowerWord)) {
    return `${word}es`;
  }

  return `${word}s`;
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for older browsers or non-secure contexts
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const result = document.execCommand("copy");
    textArea.remove();
    return result;
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
    return false;
  }
}

/**
 * Opens email client with pre-filled subject and body
 * @param subject - Email subject
 * @param body - Email body
 * @param to - Email recipient (optional)
 */
export function shareViaEmail(subject: string, body: string, to?: string): void {
  const mailtoUrl = `mailto:${to || ""}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoUrl, "_blank");
}

/**
 * Opens Facebook share dialog in a new tab
 * @param url - URL to share
 * @param text - Optional text to include
 */
export function shareViaFacebook(url: string, text?: string | null): void {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}${text ? `&quote=${encodeURIComponent(text)}` : ""}`;
  window.open(shareUrl, "_blank");
}

/**
 * Opens Twitter/X share dialog in a new tab
 * @param url - URL to share
 * @param text - Optional text to include
 */
export function shareViaTwitter(url: string, text?: string | null): void {
  const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}${text ? `&text=${encodeURIComponent(text)}` : ""}`;
  window.open(shareUrl, "_blank");
}

/**
 * Opens Instagram (note: Instagram doesn't support direct sharing via URL)
 * This will copy the link to clipboard and show a message
 * @param url - URL to share
 */
export function shareViaInstagram(url: string): void {
  copyToClipboard(url).then((success) => {
    if (success) {
      // You can add a toast notification here
      console.log("Link copied! You can now paste it in Instagram.");
    }
  });
}

/**
 * Uses the Web Share API if available, falls back to copy to clipboard
 * @param url - URL to share
 * @param title - Optional title
 * @param text - Optional text
 */
export async function shareViaNativeAPI(url: string, title?: string, text?: string): Promise<boolean> {
  if (navigator.share) {
    try {
      await navigator.share({
        title: title || "Check out this deal!",
        text: text || "I found an amazing deal you might like!",
        url: url,
      });
      return true;
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        console.error("Error sharing:", error);
      }
      return false;
    }
  } else {
    // Fallback to copy to clipboard
    return await copyToClipboard(url);
  }
}

/**
 * Options for the slugify function
 */
interface SlugifyOptions {
  /** Character to use as separator (default: '-') */
  separator?: string;
  /** Whether to convert to lowercase (default: true) */
  lowercase?: boolean;
  /** Whether to remove special characters (default: true) */
  removeSpecialChars?: boolean;
  /** Maximum length of the slug (default: undefined - no limit) */
  maxLength?: number;
  /** Custom character mappings for specific characters */
  charMap?: Record<string, string>;
}

/**
 * Creates a URL-friendly slug from a string
 * @param str - The string to convert to a slug
 * @param options - Configuration options for the slugify function
 * @returns A URL-friendly slug
 *
 * @example
 * slugify("Hello World!") // "hello-world"
 * slugify("Hello World!", { separator: '_' }) // "hello_world"
 * slugify("Hello World!", { maxLength: 5 }) // "hello"
 */
export function slugify(str: string, options: SlugifyOptions = {}): string {
  const {
    separator = "-",
    lowercase = true,
    removeSpecialChars = true,
    maxLength,
    charMap = {
      æ: "ae",
      œ: "oe",
      å: "a",
      ø: "o",
      ü: "u",
      ñ: "n",
      ç: "c",
      ß: "ss",
      é: "e",
      è: "e",
      ê: "e",
      ë: "e",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      í: "i",
      ì: "i",
      î: "i",
      ï: "i",
      ó: "o",
      ò: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ú: "u",
      ù: "u",
      û: "u",
      ý: "y",
      ÿ: "y",
    },
  } = options;

  if (!str) return "";

  let result = str;

  // Apply custom character mappings
  Object.entries(charMap).forEach(([char, replacement]) => {
    result = result.replace(new RegExp(char, "gi"), replacement);
  });

  // Convert to lowercase if specified
  if (lowercase) {
    result = result.toLowerCase();
  }

  // Remove special characters if specified
  if (removeSpecialChars) {
    // Replace any non-alphanumeric characters with the separator
    result = result.replace(/[^a-z0-9]+/gi, separator);
  }

  // Remove leading/trailing separators
  result = result.replace(new RegExp(`^${separator}+|${separator}+$`, "g"), "");

  // Replace multiple consecutive separators with a single one
  result = result.replace(new RegExp(`${separator}+`, "g"), separator);

  // Apply max length if specified
  if (maxLength && result.length > maxLength) {
    result = result.substring(0, maxLength);
    // Remove trailing separator if it exists after truncation
    result = result.replace(new RegExp(`${separator}+$`, "g"), "");
  }

  return result;
}
