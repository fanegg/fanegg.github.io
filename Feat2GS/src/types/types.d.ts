type Author = {
  name: string;
  url?: string;
  institution?: string;
  notes?: string[];
}

type Link = {
  url: string;
  name: string;
  icon?: string;
}

type Note = {
  symbol: string;
  text: string;
}

type Institution = {
  symbol: string;
  name: string;
}

export { Author, Link, Note, Institution };