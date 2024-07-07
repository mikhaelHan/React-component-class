import LSKey from '../models/Local-storage.model';

const LSService = (search?: string) => {
  if (search !== undefined) {
    localStorage.setItem(LSKey.key, search);
    return search;
  }
  const res: string | null = localStorage.getItem(LSKey.key);
  if (res === null) {
    localStorage.setItem(LSKey.key, '');
    return '';
  }
  return res;
};

export default LSService;
