import { Button, Form, Input, InputNumber, Select } from "antd";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jewelryContext } from "../../contexts/jewelryContext";
import { names } from "../../helpers/names";

const Edit = () => {
  const params = useParams();
  const { getOneJewelry, oneJewelry, updateProduct } =
    useContext(jewelryContext);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    getOneJewelry(params.id);
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneJewelry);
  }, [oneJewelry]);
  function save(values) {
    // console.log(values);
    updateProduct(params.id, values);
    navigate("/admin");
  }
  return (
    <div
      className="container"
      style={{
        marginTop: "30px",
        marginLeft: "350px",
        width: "700px",
        backgroundColor: "ghostwhite",
      }}
    >
      <h2>Edit product</h2>
      <Form layout="vertical" name="basic" onFinish={save} form={form}>
        <Form.Item
          label="Model"
          name="model"
          rules={[
            {
              required: true,
              message: "Please input model!",
            },
          ]}
        >
          <Select>
            {names.map((item) => (
              <Select.Option key={item.id} value={item.model}>
                {item.model}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input description!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input price!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Image1"
          name="image1"
          rules={[
            {
              required: true,
              message: "Please input image1!",
            },
          ]}
        >
          <InputNumber min={1} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Image2"
          name="image2"
          rules={[
            {
              required: true,
              message: "Please input URL of image 2!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Video"
          name="video"
          rules={[
            {
              required: true,
              message: "Please input URL of video!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Edit;
