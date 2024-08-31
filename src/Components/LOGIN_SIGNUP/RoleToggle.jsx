import React from 'react'
import { AiOutlineSync } from 'react-icons/ai';

const RoleToggle = ({handleRoleToggle, role}) => {

    return (
      <div className="form-control lg:col-span-2 flex justify-center items-center">
        <button
          type="button"
          onClick={handleRoleToggle}
          className={`btn btn-outline hover:text-black ${role === 'Kabadiwala' ? 'btn-primary' : 'btn-success'}`}>
          {role === 'Kabadiwala' ? 'Kabadiwala' : 'Scrap Dealer'}
          <AiOutlineSync
            className={`text-xl `}
          />
        </button>
      </div>
    );
}

export default RoleToggle