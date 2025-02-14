import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  export default function Cards() {
    return (
      <Card className="w-full h-full shadow-lg">
        <CardHeader shadow={false} floated={false} className="h-1/2">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="card-image"
            className="h-full w-full object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardBody className="p-3 h-1/4">
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              Apple AirPods
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              $95.00
            </Typography>
          </div>
          <div className="flex">
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 overflow-hidden"
          >
            With plenty of talk and listen time, voice-activated Siri access, and
            an available wireless charging case.
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 overflow-hidden"
          >
            ...
          </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0 h-1/4">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-gray-900 text-white hover:scale-105 transition-transform"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    );
  }
  