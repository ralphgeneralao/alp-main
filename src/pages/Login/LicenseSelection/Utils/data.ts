//all of these is temporary, this data will come from database
export const user = {
  id: '123',
  email: 'sampleemail@gmail.com',
  is_institution: false,
  roles: [
    {
      short_code: 'SUB',
      name: 'Subscriber',
      assigned_by: 'A Learning Place, A Teaching Place',
      subsite_short_code: '4TD',
      subsite: {
        name: '4-Tier Diagnostic Assessment',
      },
    },
    {
      short_code: 'SV',
      name: 'Supervisor',
      assigned_by: 'University of San Carlos',
      subsite_short_code: '4TD',
      subsite: {
        name: '4-Tier Diagnostic Assessment',
      },
    },
    {
      short_code: 'SUB',
      name: 'Subscriber',
      assigned_by: 'A Learning Place, A Teaching Place',
      subsite_short_code: 'TR',
      subsite: {
        name: 'Teaching Resources',
      },
    },
    {
      short_code: 'SUB',
      name: 'Subscriber',
      assigned_by: 'A Learning Place, A Teaching Place',
      subsite_short_code: 'DVR',
      subsite: {
        name: 'Digital and Virtual Resources',
      },
    },
  ],
  licenses: [
    {
      user_license_id: '234234',
      license_key: '234234234234',
      created_at: '2022-09-01',
      expires_at: '2023-09-01',
      role_short_code: 'SL',
      subsite_short_code: '4TD',
      subsite: {
        name: '4-Tier Diagnostic Assessment',
      },
      assigned_by: {
        name: 'Steve Roggers',
      },
    },
    {
      user_license_id: '456456456',
      license_key: '4654543222434',
      created_at: '2022-08-15',
      expires_at: '2023-08-15',
      role_short_code: 'SL',
      subsite_short_code: '4TD',
      subsite: {
        name: '4-Tier Diagnostic Assessment',
      },
      assigned_by: {
        name: 'Tony Stark',
      },
    },
    {
      user_license_id: '567567345',
      license_key: '23467773455',
      created_at: '2022-05-23',
      expires_at: '2023-05-23',
      role_short_code: 'SL',
      subsite_short_code: '4TD',
      subsite: {
        name: '4-Tier Diagnostic Assessment',
      },
      assigned_by: {
        name: 'Steven Strange',
      },
    },
    {
      user_license_id: '645645645',
      license_key: '456456456456',
      created_at: '2022-05-23',
      expires_at: '2023-05-23',
      role_short_code: 'LNS',
      subsite_short_code: 'TR',
      subsite: {
        name: 'Teaching Resources',
      },
      assigned_by: {
        name: 'Steven Strange',
      },
    },
  ],
};
