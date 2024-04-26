// import React from 'react';

const Link = ({route}) => {


    return (
        <li className='mr-10 '>
            <a className=" hover:bg-red-400" href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;