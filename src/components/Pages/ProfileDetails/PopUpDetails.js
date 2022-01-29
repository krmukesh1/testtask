import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";

export const PopUpDetails = ({ open, handleClose, ProfileDetails }) => {
  const { image,first, last, email, gender, phone, cell, nat, city, state } =ProfileDetails;
  console.log(ProfileDetails);
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth="500">
        <DialogTitle>Profile Details</DialogTitle>
        <DialogContent>
          <Table>
            <TableBody>
              <TableRow>
              <TableCell><img src={image} alt={first}/></TableCell>
                <TableCell>FullName: {first} {last}</TableCell>
                <TableCell>Email : {email}</TableCell>
                <TableCell>City : {city}</TableCell> 
                <TableCell>state : {state}</TableCell>
                <TableCell>Gender: {gender}</TableCell>
                <TableCell>Phone: {phone}</TableCell>
                <TableCell>cell:{cell}</TableCell>
                <TableCell>Nat: {nat}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </div>
  );
};
