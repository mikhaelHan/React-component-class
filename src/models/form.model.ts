export interface IDownloadImage {
  lastModified: number;
  lastModifiedDate: string;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface IDownloadFile {
  0?: IDownloadImage;
  length: number;
}

export interface IRideForm {
  name: string;
  age: number | null;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  condition: boolean;
  image: IDownloadFile;
  country: string;
}

export interface IWriteForm {
  name: string;
  age: number | null;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  condition: boolean;
  image: string | ArrayBuffer | null;
  country: string;
}
