interface ContactItem {
  url: string;
  displayText: string;
}

const contactData: Record<string, ContactItem> = {
  github: {
    url: "https://github.com/realdyllon",
    displayText: "Github",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/dyllon-gunawardhana/",
    displayText: "LinkedIn",
  },
  email: {
    url: "mailto:dyllon.guna@gmail.com", // todo: change this to dyllon.io email domain
    displayText: "Email",
  },
};

export default contactData;
