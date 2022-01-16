interface LanguageItem {
  imageUri: string;
}

// NOTE: all uris are relative to project root

const languageData: Record<string, LanguageItem> = {
  javascript: {
    imageUri: "/svg/javascript.svg",
  },
  typescript: {
    imageUri: "/svg/typescript.svg",
  },
  java: {
    imageUri: "/svg/java.svg",
  },
  swift: {
    imageUri: "/svg/swift.svg",
  },
  golang: {
    imageUri: "/svg/go.svg",
  },
  c: {
    imageUri: "/svg/c.svg",
  },
  cpp: {
    imageUri: "/svg/cpp.svg",
  },
  python: {
    imageUri: "/svg/python.svg",
  },
};

export default languageData;
