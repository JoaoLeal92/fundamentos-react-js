const formatDate = (date: Date): string => {
  const newDate = new Date(date);

  return Intl.DateTimeFormat('pt-BR', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(newDate);
};

export default formatDate;
