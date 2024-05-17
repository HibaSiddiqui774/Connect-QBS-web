import React from 'react'
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import user from '../../../assets/Image 5.png'
import users from '../../../assets/multiple-users-silhouette.png'
import MoreVert from '@mui/icons-material/MoreVert';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Person from '@mui/icons-material/Person';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';
import ListItemDecorator from '@mui/joy/ListItemDecorator';

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
  }));

const Employee_list = () => {
  return (
    <>
     <Grid container gap={1}  sx={{ flexGrow: 1 }} justifyContent='center'>
      <Grid lg={2} md={2} sm={3} xs={12}>
        <Item> <Input sx={{border: 0,   boxShadow: '1px 1px 10px 1px lightgrey', borderRadius: 0}} placeholder="Employee Id" /></Item>
      </Grid>
      <Grid lg={2} md={2} sm={3} xs={12}>
        <Item> <Input sx={{border: 0,   boxShadow: '1px 1px 10px 1px lightgrey', borderRadius: 0}}  placeholder="Employee Name" /></Item>
      </Grid>
      <Grid lg={2} md={2} sm={3} xs={12}>
        <Item> <Select
          placeholder="Select a pet"
          name="foo"
          required
          sx={{border: 0,   boxShadow: '1px 1px 10px 1px lightgrey', borderRadius: 0}}
        >
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
          <Option value="fish">Fish</Option>
          <Option value="bird">Bird</Option>
        </Select></Item>
      </Grid>
      <Grid lg={2} md={2} sm={3} xs={12}>
        <Item> <Button className='btn_search' sx={{
            width: '100%', 
            backgroundColor: '#55ce63',
            borderRadius: 0,
            boxShadow: '1px 1px 10px 1px lightgrey'}}>Search</Button></Item>
      </Grid>
      <Grid lg={2} md={2} sm={3} xs={12}>
        <Item> <Button className='btn_person' startDecorator={<Person />} sx={{
            width: '100%', 
            backgroundColor: '#ffba21',
            borderRadius: 50,
            boxShadow: '1px 1px 10px 1px lightgrey'
            }}>Add Employee</Button></Item>
      </Grid>
    </Grid>
    
    <Grid container gap={1} sx={{ flexGrow: 1, overflowX: 'hidden' }} justifyContent='center'>
        
        <Grid lg={3} md={5} sm={6} xs={12}>
                <Item> 
                <Card
            variant="outlined"
            sx={{
                height: 120,
                borderRadius: 10,
                boxShadow: '1px 1px 10px 1px lightgrey',
                border: 0,
                '--Card-radius': (theme) => theme.vars.radius.xs,
            }}
            >
            <CardContent  sx={{ alignItems: 'center'}}>
                <Dropdown>
                <MenuButton color="neutral" variant="plain" size="sm" sx={{ ml: 'auto'}}>
                    <MoreVert  />
                </MenuButton>
                <Menu>
            <MenuItem>
            <ListItemDecorator>
                <Edit />
            </ListItemDecorator>{' '}
            Edit
            </MenuItem>
            <MenuItem>
            <ListItemDecorator sx={{ color: 'inherit' }}>
                <DeleteForever />
            </ListItemDecorator>{' '}
            Delete
            </MenuItem>
        </Menu>
        </Dropdown>
            </CardContent>
            <CardOverflow sx={{alignItems: 'center', margin: '-40px'}}>
            <Avatar src={user} sx={{ '--Avatar-size': '4rem' }} />
            
            <Typography level="title-lg">John Doe</Typography>
            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                    Graphic Designer
            </Typography>
            </CardOverflow>
            <CardContent>
                <div style={{textAlign: 'right',marginTop: '10px'}}>
                <img src={users} width={25} height={25} />
                </div>
                
            
            </CardContent>
            
            <CardContent orientation="horizontal" sx={{ gap: 1 }}>
                
            </CardContent>
            </Card>
                </Item>
        </Grid>
        
        <Grid lg={3} md={5} sm={6}  xs={12}>
            <Item> 
            <Card
        variant="outlined"
        sx={{
            height: 120,
            borderRadius: 10,
            boxShadow: '1px 1px 10px 1px lightgrey',
            border: 0,
            '--Card-radius': (theme) => theme.vars.radius.xs,
        }}
        >
        <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1}}>
        
        <Dropdown>
            <MenuButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto'}}>
                <MoreVert />
            </MenuButton>
            <Menu>
            <MenuItem>
        <ListItemDecorator>
            <Edit />
          </ListItemDecorator>{' '}
          Edit
        </MenuItem>
        <MenuItem>
        <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>{' '}
          Delete
        </MenuItem>
      </Menu>
      </Dropdown>
        </CardContent>
        <CardOverflow sx={{alignItems: 'center', margin: '-40px'}}>
        <Avatar src={user} sx={{ '--Avatar-size': '4rem' }} />
        
        <Typography level="title-lg">John Doe</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                Graphic Designer
        </Typography>
        </CardOverflow>
        <CardContent>
            <div style={{textAlign: 'right',marginTop: '10px'}}>
            <img src={users} width={25} height={25} />
            </div>
            
        
        </CardContent>
        
        <CardContent orientation="horizontal" sx={{ gap: 1 }}>
            
            
        
        </CardContent>
        </Card>
            </Item>
        </Grid>
        
        <Grid lg={3} md={5} sm={6}  xs={12}>
            <Item> 
            <Card
        variant="outlined"
        sx={{
            height: 120,
            borderRadius: 10,
            boxShadow: '1px 1px 10px 1px lightgrey',
            border: 0,
            '--Card-radius': (theme) => theme.vars.radius.xs,
        }}
        >
        <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1}}>
        
        <Dropdown>
            <MenuButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto'}}>
                <MoreVert />
            </MenuButton>
            <Menu>
            <MenuItem>
        <ListItemDecorator>
            <Edit />
          </ListItemDecorator>{' '}
          Edit
        </MenuItem>
        <MenuItem>
        <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>{' '}
          Delete
        </MenuItem>
      </Menu>
      </Dropdown>
        </CardContent>
        <CardOverflow sx={{alignItems: 'center', margin: '-40px'}}>
        <Avatar src={user} sx={{ '--Avatar-size': '4rem' }} />
        
        <Typography level="title-lg">John Doe</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                Graphic Designer
        </Typography>
        </CardOverflow>
        <CardContent>
            <div style={{textAlign: 'right',marginTop: '10px'}}>
            <img src={users} width={25} height={25} />
            </div>
            
        
        </CardContent>
        
        <CardContent orientation="horizontal" sx={{ gap: 1 }}>
            
            
        
        </CardContent>
        </Card>
            </Item>
        </Grid>

        <Grid lg={3} md={5} sm={6}  xs={12}>
            <Item> 
            <Card
        variant="outlined"
        sx={{
            height: 120,
            borderRadius: 10,
            boxShadow: '1px 1px 10px 1px lightgrey',
            border: 0,
            '--Card-radius': (theme) => theme.vars.radius.xs,
        }}
        >
        <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1}}>
        
        <Dropdown>
            <MenuButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto'}}>
                <MoreVert />
            </MenuButton>
            <Menu>
            <MenuItem>
        <ListItemDecorator>
            <Edit />
          </ListItemDecorator>{' '}
          Edit
        </MenuItem>
        <MenuItem>
        <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>{' '}
          Delete
        </MenuItem>
      </Menu>
      </Dropdown>
        </CardContent>
        <CardOverflow sx={{alignItems: 'center', margin: '-40px'}}>
        <Avatar src={user} sx={{ '--Avatar-size': '4rem' }} />
        
        <Typography level="title-lg">John Doe</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                Graphic Designer
        </Typography>
        </CardOverflow>
        <CardContent>
            <div style={{textAlign: 'right',marginTop: '10px'}}>
            <img src={users} width={25} height={25} />
            </div>
            
        
        </CardContent>
        
        <CardContent orientation="horizontal" sx={{ gap: 1 }}>
            
            
        
        </CardContent>
        </Card>
            </Item>
        </Grid>

        <Grid lg={3} md={5} sm={6}  xs={12}>
            <Item> 
            <Card
        variant="outlined"
        sx={{
            height: 120,
            borderRadius: 10,
            boxShadow: '1px 1px 10px 1px lightgrey',
            border: 0,
            '--Card-radius': (theme) => theme.vars.radius.xs,
        }}
        >
        <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1}}>
        
        <Dropdown>
            <MenuButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto'}}>
                <MoreVert />
            </MenuButton>
            <Menu>
            <MenuItem>
        <ListItemDecorator>
            <Edit />
          </ListItemDecorator>{' '}
          Edit
        </MenuItem>
        <MenuItem>
        <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>{' '}
          Delete
        </MenuItem>
      </Menu>
      </Dropdown>
        </CardContent>
        <CardOverflow sx={{alignItems: 'center', margin: '-40px'}}>
        <Avatar src={user} sx={{ '--Avatar-size': '4rem' }} />
        
        <Typography level="title-lg">John Doe</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                Graphic Designer
        </Typography>
        </CardOverflow>
        <CardContent>
            <div style={{textAlign: 'right',marginTop: '10px'}}>
            <img src={users} width={25} height={25} />
            </div>
            
        
        </CardContent>
        
        <CardContent orientation="horizontal" sx={{ gap: 1 }}>
            
            
        
        </CardContent>
        </Card>
            </Item>
        </Grid>
        
        <Grid lg={3} md={5} sm={6}  xs={12}>
            <Item> 
            <Card
        variant="outlined"
        sx={{
            height: 120,
            borderRadius: 10,
            boxShadow: '1px 1px 10px 1px lightgrey',
            border: 0,
            '--Card-radius': (theme) => theme.vars.radius.xs,
        }}
        >
        <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1}}>
        
        <Dropdown>
            <MenuButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto'}}>
                <MoreVert />
            </MenuButton>
            <Menu>
            <MenuItem>
        <ListItemDecorator>
            <Edit />
          </ListItemDecorator>{' '}
          Edit
        </MenuItem>
        <MenuItem>
        <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>{' '}
          Delete
        </MenuItem>
      </Menu>
      </Dropdown>
        </CardContent>
        <CardOverflow sx={{alignItems: 'center', margin: '-40px'}}>
        <Avatar src={user} sx={{ '--Avatar-size': '4rem' }} />
        
        <Typography level="title-lg">John Doe</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                Graphic Designer
        </Typography>
        </CardOverflow>
        <CardContent>
            <div style={{textAlign: 'right',marginTop: '10px'}}>
            <img src={users} width={25} height={25} />
            </div>
            
        
        </CardContent>
        
        <CardContent orientation="horizontal" sx={{ gap: 1 }}>
            
            
        
        </CardContent>
        </Card>
            </Item>
        </Grid>
        
        <Grid lg={3} md={5} sm={6}  xs={12}>
            <Item> 
            <Card
        variant="outlined"
        sx={{
            height: 120,
            borderRadius: 10,
            boxShadow: '1px 1px 10px 1px lightgrey',
            border: 0,
            '--Card-radius': (theme) => theme.vars.radius.xs,
        }}
        >
        <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1}}>
        
        <Dropdown>
            <MenuButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto'}}>
                <MoreVert />
            </MenuButton>
            <Menu>
            <MenuItem>
        <ListItemDecorator>
            <Edit />
          </ListItemDecorator>{' '}
          Edit
        </MenuItem>
        <MenuItem>
        <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>{' '}
          Delete
        </MenuItem>
      </Menu>
      </Dropdown>
        </CardContent>
        <CardOverflow sx={{alignItems: 'center', margin: '-40px'}}>
        <Avatar src={user} sx={{ '--Avatar-size': '4rem' }} />
        
        <Typography level="title-lg">John Doe</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                Graphic Designer
        </Typography>
        </CardOverflow>
        <CardContent>
            <div style={{textAlign: 'right',marginTop: '10px'}}>
            <img src={users} width={25} height={25} />
            </div>
            
        
        </CardContent>
        
        <CardContent orientation="horizontal" sx={{ gap: 1 }}>
            
            
        
        </CardContent>
        </Card>
            </Item>
        </Grid>

        <Grid lg={3} md={5} sm={6}  xs={12}>
            <Item> 
            <Card
        variant="outlined"
        sx={{
            height: 120,
            borderRadius: 10,
            boxShadow: '1px 1px 10px 1px lightgrey',
            border: 0,
            '--Card-radius': (theme) => theme.vars.radius.xs,
        }}
        >
        <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1}}>
        
        <Dropdown>
            <MenuButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto'}}>
                <MoreVert />
            </MenuButton>
            <Menu>
            <MenuItem>
        <ListItemDecorator>
            <Edit />
          </ListItemDecorator>{' '}
          Edit
        </MenuItem>
        <MenuItem>
        <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>{' '}
          Delete
        </MenuItem>
      </Menu>
      </Dropdown>
        </CardContent>
        <CardOverflow sx={{alignItems: 'center', margin: '-40px'}}>
        <Avatar src={user} sx={{ '--Avatar-size': '4rem' }} />
        
        <Typography level="title-lg">John Doe</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                Graphic Designer
        </Typography>
        </CardOverflow>
        <CardContent>
            <div style={{textAlign: 'right',marginTop: '10px'}}>
            <img src={users} width={25} height={25} />
            </div>
            
        
        </CardContent>
        
        <CardContent orientation="horizontal" sx={{ gap: 1 }}>
            
            
        
        </CardContent>
        </Card>
            </Item>
        </Grid>

        <Grid lg={3} md={5} sm={6}  xs={12}>
            <Item> 
            <Card
        variant="outlined"
        sx={{
            height: 120,
            borderRadius: 10,
            boxShadow: '1px 1px 10px 1px lightgrey',
            border: 0,
            '--Card-radius': (theme) => theme.vars.radius.xs,
        }}
        >
        <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1}}>
        
        <Dropdown>
            <MenuButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto'}}>
                <MoreVert />
            </MenuButton>
            <Menu>
            <MenuItem>
        <ListItemDecorator>
            <Edit />
          </ListItemDecorator>{' '}
          Edit
        </MenuItem>
        <MenuItem>
        <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>{' '}
          Delete
        </MenuItem>
      </Menu>
      </Dropdown>
        </CardContent>
        <CardOverflow sx={{alignItems: 'center', margin: '-40px'}}>
        <Avatar src={user} sx={{ '--Avatar-size': '4rem' }} />
        
        <Typography level="title-lg">John Doe</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                Graphic Designer
        </Typography>
        </CardOverflow>
        <CardContent>
            <div style={{textAlign: 'right',marginTop: '10px'}}>
            <img src={users} width={25} height={25} />
            </div>
            
        
        </CardContent>
        
        <CardContent orientation="horizontal" sx={{ gap: 1 }}>
            
            
        
        </CardContent>
        </Card>
            </Item>
        </Grid>
    </Grid>
    </>
   

    
  )
}

export default Employee_list