import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@material-ui/core";

export const ShowList = ({ data, handleOpen }) => {
  const [page, setPage] = useState(10);
  const prevLoadPage = () => {
    setPage((perviousValue) => perviousValue - 10);
  };
  const loadPage = () => {
    setPage((perviousValue) => perviousValue + 10);
  };
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Profile Image</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.slice(0, page).map((item, index) => {
                const {
                  picture: { thumbnail },
                  name: { first, last },
                  email,
                  location: { city, state },
                } = item;
                return (
                  <TableRow key={index} onClick={() => handleOpen(item)}>
                    <TableCell>
                      <img src={thumbnail} alt={first} />
                    </TableCell>
                    <TableCell>{first} {last}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{city}</TableCell>
                    <TableCell>{state}</TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell>Loading</TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>

              <TableCell align="right">
              <small onClick={prevLoadPage} style={{ cursor: "pointer" ,marginRight:"20px"}}>
               Prev
                </small>   
                <small onClick={loadPage} style={{ cursor: "pointer" }}>
                  Next 
                </small>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
