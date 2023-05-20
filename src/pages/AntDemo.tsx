import { useState } from 'react';
import 'antd/dist/reset.css';
import { Button, Dropdown, Modal } from 'antd';

interface Item {
  id: number;
  name: string;
}

const initialState = [{ id: 1, name: 'one'}, { id: 2, name: 'two'}, { id: 3, name: 'three'}];

export default function () {
  const [list, setList] = useState<Item[]>(initialState)
  const [elementToRemove, setElementToRemove] = useState<Item | null>(null);

  const confirmDelete = () => {
    setList(s => s.filter(el => el.id !== elementToRemove?.id))
    setElementToRemove(null)
  };

  const cancelDelete = () => {
    setElementToRemove(null)
  };

  const openDeleteModal = (item: Item) => {
    setElementToRemove(item)
  }



  return (
    <div className="container">
      <Modal
        title="Modal"
        open={!!elementToRemove}
        onOk={confirmDelete}
        onCancel={cancelDelete}
        okText="Confirm"
        cancelText="Cancel"
      >
        Are you sure to remove this element?
      </Modal>

      <div data-testid="list">
        {
          list.map(item => {
            return <div className="d-flex justify-content-between p-1" key={item.id}>
              <div>{item.name}</div>
              <Dropdown menu={{ items: [
                  { key: 'delete', label: (<div onClick={() => openDeleteModal(item)}>Delete</div>) },
                  { key: 'edit', label: (<div>Edit</div>) },
                ] }} placement="bottomLeft" arrow>
                <Button>Actions</Button>
              </Dropdown>
            </div>
          })
        }
      </div>
    </div>
  );
}

