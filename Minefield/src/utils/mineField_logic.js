const createBoard = (rows, cols) => {
  console.log('create_board')
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
  console.log('spread_mines')
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
  console.log('create_mined_board')
  const board = createBoard(rows, cols)
  spreadMines(board, mines_amount)
  return board
}

const cloneBoard = board => {
  console.log('clone_board', board)
  return board.map(rows => {
    return rows.map(field => {
      return { ...field }
    })
  })
}

const getNeighbors = (board, row, col) => {
  console.log('get_neighbors')
  const neighbors = []
  const rows = [row - 1, row, row + 1]
  const cols = [col - 1, col, col + 1]

  rows.forEach(r => {
    cols.forEach(c => {
      const different = r !== row && c !== col
      const valid_row = r >= 0 && r < board.length
      const valid_col = c >= 0 && c < board[0].length

      if (different && valid_row && valid_col) {
        neighbors.push(board[r][c])
      }
    })
  })
  return neighbors
}

const safeNeighborhood = (board, row, col) => {
  console.log('safe_neighborhood')
  const safe = (result, neighbor) => result && !neighbor.mined
  return getNeighbors(board, row, col).reduce(safe, true)
}

const openField = (board, row, col) => {
  console.log('open_field')
  const field = board[row][col]

  if(!field.opened) {
    field.opened = true

    if(field.mined) {
      field.blowned = true
    } 
    else if(safeNeighborhood(board, row, col)) {
      getNeighbors(board, row, col).forEach(n => {
          openField(board, n.row, n.col)
      })
    } 
    else {
      const neighbors = getNeighbors(board, row, col)
      field.nearMines = neighbors.filter(n => n.mined).length
    }
  }
}

const fields = board => [].concat(...board)

const fieldBlowned = board => fields(board)
  .filter(field => field.blowned).length > 0

const pending = field => (field.mined && !field.flagged) || (!field.mined && !field.opened)

const wonGame = board => fields(board)
  .filter(pending).length === 0

const showMines = board => fields(board).filter(field => field.mined) 
  .forEach(field => field.opened = true)

const invertFlag = (board, row, col) => {
  const field = board[row][col]
  field.flagged = !field.flagged
}

const flagsUsed = board => fields(board) 
  .filter(field => field.flagged).length

export {
  createMinedBoard,
  cloneBoard,
  openField,
  fieldBlowned,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} 

