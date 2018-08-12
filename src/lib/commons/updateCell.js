const updateCell = (board, i, j, num) => (
  board.reduce( (acc,row,rowIndex) => {
    if(rowIndex!==i){
      return [...acc,row];
    }

    return [
      ...acc,
      [...row.slice(0,j),
        num
        ,...row.slice(j,row.length)
    ]];

  }, [])
);

export { updateCell };
