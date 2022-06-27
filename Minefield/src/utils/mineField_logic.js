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

const cloneBoard = board => {
  return board.map(rows => {
    return rows.map(field => {
      return { ...field }
    })
  })
}

const getNeighbors = (board, selected_row, selected_col) => {
  const neighbors = []
  const rows = [selected_row - 1, selected_row, selected_row + 1]
  const cols = [selected_col - 1, selected_col, selected_col + 1]

  rows.forEach(row => {
    cols.forEach(col => {
      const different = row !== selected_row && col !== selected_col
      const valid_row = row >= 0 && row < board.length
      const valid_col = col >= 0 && col < board[0].length

      if (different && valid_row && valid_col) {
        neighbors.push(board[row][col])
      }
    })
  })
  return neighbors
}

const safeNeighborhood = (board, row, col) => {
  const safe = (result, neighbor) => result && !neighbor.mined
  return getNeighbors(board, row, col).reduce(safe, true)
}

const openField = (board, row, col) => {
  const field = board[row][col]
  if(!field.opened) {
    field.opened = true

    if(field.mined) {
      field.blowned = true

    } else if(safeNeighborhood(board, row, col)) {
      getNeighbors(board, row, col)
        .forEach(neighbor => {
          openField(board, neighbor.row, neighbor.col)
      })

    } else {
      const neighbors = getNeighbors(board, row, col)
      field.nearMines = neighbors.filter(neighbor => neighbor.mined).length
    }
  }
}

const fields = board => [].concat(...board)

const fieldBlowned = board => fields(board)
  .filter(field => field.blowned).length > 0

const pending = field => (field.mined && !field.flagged) || (!field.mined && !field.opened)

const wonGame = board => fields(board).filter(pending).length === 0

const showMines = board => field(board).filter(field => field.mined) 
  .forEach(field => field.opened = true)

export {
  createMinedBoard,
  cloneBoard,
  openField,
  fieldBlowned,
  wonGame,
  showMines
} 