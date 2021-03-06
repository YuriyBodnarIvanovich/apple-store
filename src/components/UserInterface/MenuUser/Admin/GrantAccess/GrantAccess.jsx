import React, { useEffect, useState } from 'react';
import Style from './GrantAccess.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Confirm from '../../Card/Confirm/Confirm';

const GrantAccess = () => {
  const data = useSelector((state) => state.AdminPage);
  const dispatch = useDispatch();
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    axios
      .get('/getUsersData')
      .then((response) => {
        const users = JSON.parse(JSON.stringify(response.data));
        console.log('Users!');
        console.log(users);
        dispatch({ type: 'CHANGE_USERS_DATA', newData: users });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const ItemOfTable = (propsItem) => {
    function addAdmin() {
      axios
        .post(
          '/addAdmin',
          {
            idUser: propsItem.idUsers,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then(function (response) {
          console.log(response);
          const dataUser = JSON.parse(JSON.stringify(data.usersData));
          dataUser[propsItem.index].role = true;
          dispatch({ type: 'CHANGE_USERS_DATA', newData: dataUser });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function deleteAdmin() {
      axios
        .post(
          '/deleteAdmin',
          {
            idUser: propsItem.idUsers,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then(function (response) {
          console.log(response);
          const dataUser = JSON.parse(JSON.stringify(data.usersData));
          dataUser[propsItem.index].role = false;
          dispatch({ type: 'CHANGE_USERS_DATA', newData: dataUser });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function deleteUser() {
      axios
        .post(
          '/deleteUser',
          {
            idUser: propsItem.idUsers,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then(function (response) {
          console.log(response);
          let dataUser = JSON.parse(JSON.stringify(data.usersData));
          dataUser = dataUser.filter(
            (item) => item.iduser !== propsItem.idUsers
          );
          dispatch({ type: 'CHANGE_USERS_DATA', newData: dataUser });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return (
      <tr>
        <td style={{ width: '40px' }}>{propsItem.index + 1}</td>
        <td className={Style.idUser}>{propsItem.idUsers}</td>
        <td className={Style.email}>{propsItem.email}</td>
        <td className={Style.name}>{propsItem.name}</td>
        {propsItem.role ? (
          <td>
            <label className={Style.switch}>
              <input type='checkbox' checked />
              <span className={Style.slider} onClick={deleteAdmin} />
            </label>
          </td>
        ) : (
          <td>
            <label className={Style.switch}>
              <input type='checkbox' />
              <span className={Style.slider} onClick={addAdmin} />
            </label>
          </td>
        )}
        <td className={Style.delete_item}>
          <img
            src={'https://img.icons8.com/officel/40/000000/delete-sign.png'}
            onClick={deleteUser}
          />
        </td>
      </tr>
    );
  };

  const catalog = data.usersData.map((item, index) => {
    return (
      <ItemOfTable
        idUsers={item.idusers}
        index={index}
        name={item.name}
        email={item.email}
        role={item.role}
      />
    );
  });

  return (
    <div className={Style.container}>
      <div className={Style.container_of_card}>
        <div className={Style.top}>
          <div className={Style.exit}>
            <img src='https://img.icons8.com/ios/50/000000/cancel.png' />
          </div>
        </div>
        <div className={Style.container_of_table}>
          <div className={Style.tbl_header}>
            <table cellPadding='0' cellSpacing='0' border='0'>
              <thead>
                <tr>
                  <th style={{ width: '40px' }}>???</th>
                  <th className={Style.idUser}>id</th>
                  <th className={Style.email}>Email</th>
                  <th className={Style.name}>Name</th>
                  <th className={Style.name}>Admin</th>
                  <th className={Style.name}>Delete</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className={Style.tbl_content}>
            <table cellPadding='0' cellSpacing='0' border='0'>
              <tbody>{catalog}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantAccess;
