
export interface Source{
    id: string;
    name: string;
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

//shape of reducer state
export interface ArticlesState{
    articles: Article[];
    loading: boolean;
    error: boolean;
}

export interface loginInputsProps {
    icons: React.ReactNode[];
    placeholder: string;
    name: 'email' | 'password'; // restrict to valid keys
  }

  export interface signUpInputsProps{
    icons: React.ReactNode[];
    placeholder: string;
    name: 'name'|'email'|'password'
  }

  export interface signUpFormProps{
    name: string;
    email:string;
    password: string;
  }

  export interface logInFormProps{
    email: string;
    password:string;
  }