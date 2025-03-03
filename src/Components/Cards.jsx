import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";

  export default function Cards() {
  return (
    <Link to='/title'>
      <Card className="w-full h-full shadow-lg rounded-lg">
      {/* Image */}
      <CardHeader shadow={false} floated={false} className="h-40">
        <img
          src="https://imgs.search.brave.com/KRqkY-t3DBrvTz_6SX1iyF3EBPn5xsDuK56x-jshXFE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcm9k/dWN0aW9uLW1lZGlh/LnBhcGVyc3dpdGhj/b2RlLmNvbS9kYXRh/c2V0cy9JbWFnZU5l/dC0wMDAwMDAwMDA4/LWYyZTg3ZWRkX1kw/ZlQ1emcuanBn"
          alt="card-image"
          className="h-full w-full object-cover rounded-t-lg"
        />
      </CardHeader>

      {/* Body */}
      <CardBody className="p-3">
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Dataset Title
          </Typography>
          {/* <Typography color="blue-gray" className="font-medium">
            
          </Typography> */}
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 truncate min-w-xs"
        >
          Description
        </Typography>
      </CardBody>

      {/* Footer */}
    </Card>
    </Link>
  );
}