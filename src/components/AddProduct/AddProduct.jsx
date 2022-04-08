import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import React, { useContext, useState } from "react";
import { jewelryContext } from "../../contexts/jewelryContext";
import { names } from "../../helpers/names";

const AddProduct = () => {
  const { createProduct } = useContext(jewelryContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  function save(newProduct) {
    createProduct(newProduct);
    setIsModalVisible(false);
  }
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // model,description,price,image1,image2,video,id,type
  return (
    <>
      <div className="container">
        <Button type="primary" onClick={showModal}>
          Add product
        </Button>
        <Modal
          footer={null}
          title="Add product"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            layout="vertical"
            name="basic"
            onFinish={save}
            style={{ backgroundColor: "ghostwhite" }}
          >
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
            {/* <Form.Item
            label="Type"
            name="type"
            rules={[
              {
                required: true,
                message: "Please input type!",
              },
            ]}
          >
            <Input />
          </Form.Item> */}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default AddProduct;
