import { Checkbox, Label, Select, Textarea } from "flowbite-react";

const AddProperty = () => {
  return (
    <div className="mx-2">
      <h1 className="font-serif text-xl">Add New Property</h1>
      <div className="border-[1px] border-gray-200">
        <div className="m-2">
          {" "}
          {/* add content */}
          <div>
            <h2>Title</h2>
            <input type="text" name="" className="w-full h-8 rounded " />
          </div>
          <div className="flex justify-between mt-2 gap-3 flex-col md:flex-row">
            <div className="flex-1">
              <h1>Category</h1>
              <Select>
                <option>select</option>
                <option>Buy</option>
                <option>Rent</option>
                <option>Sold</option>
              </Select>
            </div>
            <div className="flex-1">
              <h1>Type</h1>
              <Select>
                <option>select</option>
                <option>Apartment</option>
                <option>Office</option>
                <option>House</option>
                <option>Studio</option>
                <option>Villa</option>
              </Select>
            </div>
            <div className="flex-1">
              <h1>Stories</h1>
              <Select>
                <option>Select</option>
                <option>Multi Family</option>
                <option>Single Family</option>
              </Select>
            </div>
          </div>
          <div className="flex mt-2 flex-col md:flex-row">
            <div className="flex-1 mr-2">
              <h1>Price</h1>
              <input
                type="number"
                name=""
                id=""
                className="w-full h-9 rounded"
              />
            </div>
            <div className="flex-1 ml-2">
              <h1>Location</h1>
              <input type="text" name="" id="" className="w-full h-9 rounded" />
            </div>
          </div>
          <div>
            <h1>Description</h1>
            <Textarea
              placeholder="Write property description"
              rows={5}
            ></Textarea>
          </div>
          <div className="flex justify-between mt-2 gap-3 flex-col md:flex-row">
            <div className="flex-1">
              <h1>Bed</h1>
              <Select>
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>More than 5</option>
              </Select>
            </div>
            <div className="flex-1">
              <h1>Bath</h1>
              <Select>
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>More than 5</option>
              </Select>
            </div>
            <div className="flex-1">
              <h1>Sq ft</h1>
              <input type="text" name="" id="" className="w-full rounded" />
            </div>
            <div className="flex-1">
              <h1>Year Built</h1>
              <input type="text" name="" id="" className="w-full rounded" />
            </div>
            
          </div>
          <div className="mt-2 flex flex-col gap-2">
              <h1>Apartments Amenities</h1>
              <div>
              <Checkbox id="" />
              <Label htmlFor="" className="ml-2">
              Car garage
              </Label>
              </div>
              <div>
              <Checkbox id="" />
              <Label htmlFor="" className="ml-2">
                 Swimming Pool
              </Label>
              </div>
              <div>
              <Checkbox id="" />
              <Label htmlFor="" className="ml-2">
                 Elevator
              </Label>
              </div>
              <div>
              <Checkbox id="" />
              <Label htmlFor="" className="ml-2">
                 Stunning views
              </Label>
              </div>
              <div>
              <Checkbox id="" />
              <Label htmlFor="" className="ml-2">
                 Cleaning Service
              </Label>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
