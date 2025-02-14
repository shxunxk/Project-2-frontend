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
    <Card className="w-full h-full shadow-lg rounded-lg">
      {/* Image */}
      <CardHeader shadow={false} floated={false} className="h-40">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-full w-full object-cover rounded-t-lg"
        />
      </CardHeader>

      {/* Body */}
      <CardBody className="p-3">
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 truncate max-w-xs"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>

      {/* Footer */}
      <CardFooter className="pt-0">
        <Link
          to="/1"
          className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
}