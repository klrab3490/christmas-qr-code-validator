import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { realtimeDB } from "@/config/firebaseConfig";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface DataItem {
  "department": string;
  "email_address": string;
  "food": boolean;
  "food_type": string;
  "id": string;
  "name": string;
  "payment_link": string;
  "phone_number": number;
  "semester": string;
  "sr_number": number;
  "timestamp": string;
}


function Admin() {
  const [search, setSearch] = useState<string>("");
  const [view, setView] = useState<string>("card");
  const [data, setData] = useState<DataItem[]>([]);
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);

  const fetchDetails = async () => {
    try {
      const dataRef = ref(realtimeDB, `form_responses_1`);
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
      const srNumber = item.sr_number;
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
      <div className="flex justify-center items-center gap-2 mb-4">
        Avaiable Views:
        <Button onClick={() => setView("card")}>Card</Button>
        <Button onClick={() => setView("table")}>Table</Button>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Input
          placeholder="Enter SR Number To Search"
          className="w-[500px] text-xl h-10"
          onChange={(e) => { handleSearch(e)}}
        />
      </div>

      <div>

        {/* Render filtered data or the full data */}
        <div className="mt-4">
          {view === "table" ? (
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow>
                  <TableCell>Food Type</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>SR Number</TableCell>
                  <TableCell>Semester</TableCell>
                  <TableCell>Food</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(search === "" ? data : filteredData).map((item, index) => (
                  <TableRow key={index} className={`${item.food ? "text-green-500" : "text-red-500"} hover:bg-gray-100`}>
                    <TableCell>{item.food_type.startsWith("Non-Veg") ? "Non-Veg" : "Veg"}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.sr_number}</TableCell>
                    <TableCell>{item.semester}</TableCell>
                    <TableCell>{item.food ? "Yes" : "No"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {(search === "" ? data : filteredData).map((item, index) => (
                <Card key={index} className={`${item.food ? "bg-green-500" : "bg-red-500"}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <CardDescription className="text-black">{item.food_type.startsWith("Non-Veg") ? "Non-Veg" : "Veg"}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-black">SR Number: {item.sr_number}</CardDescription>
                    <CardDescription className="text-black">Semester: {item.semester}</CardDescription>
                    <CardDescription className="text-black">Food: {item.food ? "Yes" : "No"}</CardDescription>
                    <CardDescription className="text-black">Payment URL: <a href={item.payment_link} className="underline text-blue-800 hover:text-blue-500">Payment Image</a></CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Admin;
