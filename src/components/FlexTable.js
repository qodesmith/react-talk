import React, { Component } from 'react';

class FlexTable extends Component {
  createColumns() {
    const { rows, header } = this.props;
    var columns = rows[0].map(() => []); // Make an array of columns.

    if (header) {
      header.forEach((content, i) => {
        columns[i].push(content);
      });
    }

    rows.forEach(row => {
      row.forEach((content, i) => {
        columns[i].push(content);
      });
    });

    const lastColumn = columns.length - 1;
    return columns.map((column, i) => {
      const lastRow = column.length - 1;
      const columnCells = column.map((content, j) => {
        let className = 'pa2 b--black-50 ';

        const isHeader = header && !j; // 1st row.
        const isLastCol = i === lastColumn;
        const bottomRight = i === lastColumn && j === lastRow;
        const farRight = i === lastColumn;
        const bottom = j === lastRow;

        if (isHeader && isLastCol) {
          className += 'b i bt bl br ';
        } else if (isHeader) {
          className += 'b i bt bl ';
        } else if (bottomRight) {
          className += 'ba'
        } else if (farRight) {
          className += 'bt bl br';
        } else if (bottom) {
          className += 'bt bl bb';
        } else {
          className += 'bt bl';
        }

        // Alternating row background colors / odd rows.
        if (j % 2) className += ' bg-black-05';

        return <div key={j} className={className}>{content}</div>
      });

      return <div key={i}>{columnCells}</div>;
    });
  }

  render() {
    return (
      <div className='inline-flex'>{this.createColumns()}</div>
    );
  }
}

export default FlexTable;
