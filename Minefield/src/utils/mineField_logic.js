const createBoard = (rows, cols) => {
  return Array(rows).fill(0).map((_, row) => {
    return Array(cols).fill(0).map((_, col) => {
      return {
        row,
        col,
        opened: false,
        flagged: false,
        mined: false,
        blowned: false,
        nearMines: 0
      }
    })
  })
}

const spreadMines = (board, mines_amount) => {
  const rows = board.length
  const cols = board[0].length
  let mines_planted = 0

  while (mines_planted < mines_amount) {
    const row_selected = parseInt(Math.random() * rows, 10)
    const col_selected = parseInt(Math.random() * cols, 10)

    if(!board[row_selected][col_selected].mined) {
      board[row_selected][col_selected].mined = true
      mines_planted++
    }
  }
}

const createMinedBoard = (rows, cols, mines_amount) => {
  const board = createBoard(rows, cols)
  spreadMines(board, mines_amount)
  return board
}

export {
  createMinedBoard
} 