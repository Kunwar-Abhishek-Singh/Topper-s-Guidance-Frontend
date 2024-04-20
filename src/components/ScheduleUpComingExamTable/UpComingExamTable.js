import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from "react-data-table-component";


const UpComingExamTable = () => {

    const  [countries, setCountries] = useState([]);
    const getCountries = async () => {        
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    const columns = [
      {
        name:"Exam Name",
        selector: (row) => row.name,
      },
      {
        name:"Post Name",
        selector: (row) => row.nativeName,
      },
      {
        name:"Total post",
        selector: (row) => row.capital,
      },
      {
        name:"Apply Date",
        selector: (row) => row.capital,
      },
      {
        name:"last Date",
        selector: (row) => row.capital,
      },
      {
        name:"Link",
        selector: (row) => row.capital,
      },      
    ];

    useEffect (() => {
      getCountries();
    }, []);
      console.log(columns)


  return  <DataTable columns={columns} data={countries} />;

};

export default UpComingExamTable;