import { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class AppTable extends Component {
  constructor(props) {
    super(props);
    this.handleRowClick = this.handleRowClick.bind(this);
  }

  handleRowClick(event, row) {
    this.props.onRowClick(row);
  };

  renderTableHeader() {
    return (
      <TableHead>
        <TableRow>
          {this.props.config.map((col, idx) =>
            (<TableCell>{col.label}</TableCell>))}
        </TableRow>
      </TableHead>
    );
  }

  renderTableContent() {
    return (
      <TableBody>
        {this.props.data.map((row, index) => {
          const rowKey = `row-${index}`;

          return (
            <TableRow
              key={rowKey}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={(event) => this.handleRowClick(event, row)}
            >
              {this.props.config.map((col, idx) => {
                const cellKey = `${col.id}-${index}`;

                return (<TableCell key={cellKey}>{row[col.id]}</TableCell>);
              })}
            </TableRow>
          );
        })}
      </TableBody>
    );
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table id={this.props.id} sx={{ minWidth: 650 }} aria-label="simple table">
          {this.renderTableHeader()}
          {this.renderTableContent()}
        </Table>
      </TableContainer>
    );
  }
}

export default AppTable;