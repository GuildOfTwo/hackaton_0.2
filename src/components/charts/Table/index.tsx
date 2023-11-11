import { useEffect, useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Typography,
  Table as TableAntd,
  ConfigProvider,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { TUser } from '../../../utils/types/types';
import { changeUserData } from '../../../api/changeUserData';

import { getAllUsers } from '../../../api/getAllUsers';

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: TUser;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export const Table: React.FC = ({ users }) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(users);
  const [editingKey, setEditingKey] = useState('');

  // Проверка ряда таблицы на то является ли он редактируемым в данный момент
  // В стейте editingKey находится id user (идентификатор), он же id ряда, в котором инициировано редактирование
  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ lastName: '', firstName: '', department: '', ...record });
    setEditingKey(record.id);
  };

  // Отмена редактирования
  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = await form.validateFields();

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
          id: editingKey,
        });
        setData(newData);
        changeUserData({ ...row, id: editingKey });
        setEditingKey('');
      } else {
        newData.push({ ...row, id: editingKey });
        setData(newData);
        changeUserData(row);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  // Данные для заголовков таблицы
  const columns: ColumnsType<TUser> = [
    {
      title: 'Фамилия',
      dataIndex: 'lastName',
      key: 'lastName',
      editable: true,
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: 'Имя',
      dataIndex: 'firstName',
      key: 'firstName',
      editable: true,
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },

    {
      title: 'Отдел',
      dataIndex: 'department',
      key: 'department',
      editable: true,
      filters: [
        {
          text: 'IT',
          value: 'IT',
        },
        {
          text: 'Project',
          value: 'Project',
        },
      ],
      sorter: (a, b) => a.department.localeCompare(b.department),
      onFilter: (value: string, record) => record.department.indexOf(value) === 0,
    },
    {
      title: 'Ментор',
      dataIndex: 'mentor',
      key: 'mentor',
      editable: true,
      filters: [
        {
          text: 'Tom',
          value: 'Tom',
        },
        {
          text: 'Иван',
          value: 'Иван',
        },
        {
          text: 'Саша',
          value: 'Саша',
        },
      ],
      sorter: (a, b) => a.mentor.localeCompare(b.mentor),
      onFilter: (value: string, record) => record.mentor.indexOf(value) === 0,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      editable: true,
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: 'Пройдено',
      dataIndex: 'progress',
      key: 'progress',
      //   sorter: (a, b) => a.progress - b.progress,
    },
    {
      title: 'Внимание',
      dataIndex: 'alarm',
      key: 'alarm',
      //   sorter: (a, b) => a.alarm.localeCompare(b.alarm),
    },
    {
      title: 'Редактирование',
      dataIndex: 'operation',
      render: (_: any, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.id)} style={{ marginRight: 8 }}>
              Save
            </Typography.Link>
            <Popconfirm title='Уверены?' onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Изменить
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        // inputType: col.dataIndex === 'last' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            colorBgContainer: '#2D384A',
            colorTextHeading: '#fff',
          },
          Popconfirm: {
            colorText: 'rgba(0, 0, 0, 0.88)',
            colorWarning: 'rgba(0, 0, 0, 0.88)',
          },
        },
      }}
    >
      <Form form={form} component={false}>
        <TableAntd
          dataSource={data}
          columns={mergedColumns}
          pagination={false}
          rowKey='id'
          rowClassName='editable-row'
          components={{
            body: {
              cell: EditableCell,
            },
          }}
        />
      </Form>
    </ConfigProvider>
  );
};
