import React from 'react';
import {
  UserList,
  Card
} from './style';

const UserCard = ({ type, list }) => (
  type === 'boss' ?
    (
      <UserList>
        {
          list.map(e =>
            (
              <Card key={e._id}>
                <div className="top">
                  <div className="left">
                    <h2>{e.username}</h2>
                    <p className="label">
                      <span>{e.title}</span>
                    </p>
                  </div>
                  <div className="company">{e.company}</div>
                </div>
                
                <div className="desc">
                  <div className="desc-tit">应聘要求：</div>
                  {
                    e.desc.split('\n').map(e => <p key={e}>{e}</p>)
                  }
                </div>
              </Card>
            )
          )
        }
      </UserList>
    ) :
    (
      <UserList>
        {
          list.map(e =>
            (
              <Card key={e._id}>
                <h2>{e.username}</h2>
                <p className="label">
                  <span>{e.title}</span>
                </p>
                <div className="desc">
                  {
                    e.desc.split('\n').map(e => <p key={e}>{e}</p>)
                  }
                </div>
              </Card>
            )
          )
        }
      </UserList>
    )
)
export default UserCard;