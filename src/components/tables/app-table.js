import { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class AppTable extends Component {
  renderTableHeader() {
    return (
      <TableHead>
        <TableRow>
          {this.props.config.map((col, idx) => {
            if (idx === 0) return (<TableCell>{col.label}</TableCell>);

            return (<TableCell align="right">{col.label}</TableCell>);
          })}
        </TableRow>
      </TableHead>
    );
  }

  renderTableContent() {
    return (
      <TableBody>
        {this.props.data.map(row => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {this.props.config.map((col, idx) => {
              if (idx === 0) return (<TableCell component="th" scope="row">{row[col.name]}</TableCell>);

              return (<TableCell align="right">{row[col.name]}</TableCell>);
            })}
          </TableRow>
        ))}
      </TableBody>
    );
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {this.renderTableHeader()}
          {this.renderTableContent()}
        </Table>
      </TableContainer>
    );
  }
}

export default AppTable;