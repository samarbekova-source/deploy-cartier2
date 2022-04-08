import React from "react";
import { Select, Slider } from "antd";
import { names } from "../../helpers/names";

const Filters = ({ model, setModel, price, setPrice }) => {
  return (
    <div
      style={{
        marginTop: "30px",
        width: "100%",
      }}
    >
      <Select
        value={model}
        onChange={(e) => setModel(e)}
        placeholder="Filter by model"
        style={{ width: "25%" }}
        allowClear
        mode="multiple"
      >
        {names.map((item) => (
          <Select.Option key={item.id} value={item.model}>
            {item.model}
          </Select.Option>
        ))}
      </Select>
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        defaultValue={[1, 50000]}
        min={0}
        max={50000}
        step={100}
        range
      />
    </div>
  );
};

export default Filters;
