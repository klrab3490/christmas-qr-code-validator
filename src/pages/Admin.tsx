import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { Input } from "@/components/ui/input";
import { realtimeDB } from "@/config/firebaseConfig";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";

interface DataItem {
  "Email address": string;
  "Food Type": string;
  Name: string;
  "SR Number": string | number;
  Semester: string;
  Timestamp: string;
  food: boolean;
}

function Admin() {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<DataItem[]>([]);
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);

  const fetchDetails = async () => {
    try {
      const dataRef = ref(realtimeDB, `Form responses 2`);
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        setData(Object.values(data)); // If data is an object, convert it to an array
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    const filtered = data.filter((item: DataItem) => {
      const srNumber = item['SR Number'];
      return srNumber && srNumber.toString().includes(searchTerm);
    });

    if (searchTerm.length === 0) {
      setFilteredData(data);
    } else {
      setFilteredData(filtered);
    }
  }

  useEffect(() => {
    fetchDetails(); // Fetch data once when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h1 className="py-5 underline text-4xl font-bold text-center">Admin</h1>
      <p className="text-2xl font-bold pb-4">Data In Database:</p>
      <div className="flex justify-center items-center gap-2">
        <Input
          placeholder="Enter SR Number To Search"
          className="w-1/4 text-xl"
          onChange={(e) => { handleSearch(e)}}
        />
      </div>

      {/* Render filtered data or the full data */}
      <div className="mt-4">
        <Table className="w-full border-collapse">
          <TableHeader>
            <TableRow>
              <TableCell>Email Address</TableCell>
              <TableCell>Food Type</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>SR Number</TableCell>
              <TableCell>Semester</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell>Food</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(search === "" ? data: filteredData).map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item["Email address"]}</TableCell>
                <TableCell>{item["Food Type"]}</TableCell>
                <TableCell>{item.Name}</TableCell>
                <TableCell>{item["SR Number"]}</TableCell>
                <TableCell>{item.Semester}</TableCell>
                <TableCell>{item.Timestamp}</TableCell>
                <TableCell>{item.food ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </div>
  );
}

export default Admin;
