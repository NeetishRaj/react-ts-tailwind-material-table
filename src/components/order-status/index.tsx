import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ordersData from "../../data/orders.json";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ThemeProvider } from "@emotion/react";
import dropdownButtonTheme from "../../material-ui/dropdown-button-theme";

function createData(
  orderNumber: number,
  projectNumber: string,
  projectName: string,
  dateSubmitted: string,
  submittedBy: string,
  dueDate: string,
  completion: number
) {
  return {
    orderNumber,
    projectNumber,
    projectName,
    dateSubmitted,
    submittedBy,
    dueDate,
    completion,
  };
}

const rows = ordersData.map((order) =>
  createData(
    order.orderNumber,
    order.projectNumber,
    order.projectName,
    order.dateSubmitted,
    order.submittedBy,
    order.dueDate,
    order.completion
  )
);

function OrderTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="bg-[#F7F7F7]">
          <TableRow>
            <TableCell>Order Number</TableCell>
            <TableCell>Project Number</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Date Submitted</TableCell>
            <TableCell>Submitted by</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>% Completion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              className="hover:bg-table-hover"
              key={row.orderNumber}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.orderNumber}</TableCell>
              <TableCell component="th" scope="row">
                {row.projectNumber}
              </TableCell>
              <TableCell>{row.projectName}</TableCell>
              <TableCell>{row.dateSubmitted}</TableCell>
              <TableCell>{row.submittedBy}</TableCell>
              <TableCell>{row.dueDate}</TableCell>
              <TableCell>{row.completion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function OrderStatus() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const options1 = ["Sort by: Date / Time", "Sort by: Project Name"];
  const options2 = ["Auto Refresh: 60 Seconds", "No Refresh"];

  const handleClick = () => {
    console.info(`You clicked ${options1[selectedIndex]}`);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="m-10 p-4 border-r rounded-[8px] bg-white">
      <div className="my-4 flex justify-between">
        <ButtonGroup
          className="flex-grow mr-4"
          variant="contained"
          ref={anchorRef}
          aria-label="split button"
        >
          <ThemeProvider theme={dropdownButtonTheme}>
            <Button
              className="flex-grow"
              variant="outlined"
              onClick={handleClick}
            >
              {options1[selectedIndex]}
            </Button>
          </ThemeProvider>
          <Button
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
            variant="outlined"
          >
            <KeyboardArrowDownIcon />
          </Button>
        </ButtonGroup>

        <ButtonGroup
          className="flex-grow mr-4"
          variant="contained"
          ref={anchorRef}
          aria-label="split button"
        >
          <ThemeProvider theme={dropdownButtonTheme}>
            <Button
              variant="outlined"
              className="flex-grow"
              onClick={handleClick}
            >
              {options2[selectedIndex]}
            </Button>
          </ThemeProvider>

          <Button
            size="small"
            variant="outlined"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <KeyboardArrowDownIcon />
          </Button>
        </ButtonGroup>

        <ButtonGroup className="mr-4 bg-btn-primary">
          <Button variant="contained">Apply Filter</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button variant="outlined">Reset</Button>
        </ButtonGroup>
      </div>
      <div>
        <OrderTable />
      </div>
    </div>
  );
}
