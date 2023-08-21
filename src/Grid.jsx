import React from 'react';
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';
import { DataManager, Query } from '@syncfusion/ej2-data';

const Grid = ({ data, template }) => {
  const data1 = new DataManager({
    json: data,
  });

  const query = new Query().take(8);
  return (
    <GridComponent dataSource={data}>
      <ColumnsDirective>
        <ColumnDirective
          field="id"
          headerText="SrNo"
          width="80"
          textAlign="Center"
          isPrimaryKey={true}
        />
        <ColumnDirective
          field="firstName"
          //customAttributes={rowDataColor}
          headerText="First Name "
          width="100"
          textAlign="Center"
        />
        <ColumnDirective
          field="lastName"
          headerText="Last Name"
          width="100"
          textAlign="Center"
        />

        <ColumnDirective
          field="gender"
          width="100"
          headerText="Gender"
          textAlign="Center"
        />

        <ColumnDirective
          field="email"
          headerText="Email"
          width="100"
          textAlign="Center"
        />

        <ColumnDirective
          field="skill"
          headerText="Skill"
          width="100"
          template={template}
        />
      </ColumnsDirective>
    </GridComponent>
  );
};

export default Grid;
