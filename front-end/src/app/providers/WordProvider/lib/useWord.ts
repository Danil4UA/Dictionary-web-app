import { useContext } from 'react';
import { WordContext } from './WordContext';

export const useWord = () => {
  const context = useContext(WordContext);

  if (!context) {
    throw new Error('useWord must be used within a WordProvider');
  }

  const { data, isLoading, error, fetchData } = context;
  return { data, isLoading, error, fetchData };
};