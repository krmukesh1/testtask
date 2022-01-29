import React, { useState, useEffect } from "react";
import { ShowList } from "./ShowList";
import { DataSearch } from "./DataSearch";
import { PopUpDetails } from "./PopUpDetails";

export const ProfileDetails = () => {
  const [records, setRecords] = useState([]);
  const [filter, setFilter] = useState([]);
  const [userDetails, setUserDetails] = useState({
    image:"",
    first: "",
    last: "",
    email: "",
    gender: "",
    phone: "",
    cell: "",
    nat: "",
    city: "",
    state: "",
  });
  const [open, setOpen] = useState(false);

  const handleOpen = (item) => {
    setUserDetails({
      image:item.picture.thumbnail,
      first: item.name.first,
      last: item.name.last,
      email: item.email,
      gender: item.gender,
      phone: item.phone,
      cell: item.cell,
      nat: item.nat,
      city: item.location.city,
      state: item.location.state,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchValue = (searchData) => {
    const response = records.filter((item) => {
      const {
        email,
        name: { first, last },
      } = item;
      return (
        first === searchData || last === searchData || email === searchData
      );
    });
    setFilter(response);
    console.log(response.length);
  };
  const fetchusers = () => {
    fetch("https://randomuser.me/api/?results=100")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setRecords(data.results);
        setFilter(data.results);
      });
  };
  useEffect(() => {
    fetchusers();
  }, []);
  return (
    <>
      <DataSearch handleSearchValue={handleSearchValue} />
      <ShowList data={filter} handleOpen={handleOpen} />
      <PopUpDetails
        open={open}
        handleClose={handleClose}
        ProfileDetails={userDetails}
      />
    </>
  );
};
