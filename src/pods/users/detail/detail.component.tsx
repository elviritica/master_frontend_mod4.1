import React from "react";
import { MemberDetail } from "./detail.vm";
import { Avatar, Button, Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

interface Props {
  member: MemberDetail;
  onReset: () => void;
}

export const Detail: React.FC<Props> = ({ member, onReset }) => {
  return (
    <Box display="flex" justifyContent="center">
      {member ? (
        <Card>
          <CardHeader
            avatar={<Avatar src={member.avatarUrl} />}
            title={member.name}
            subheader={`User Id: ${member.id}`}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              id: {member.id}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              login: {member.login}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              company: {member.company}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              bio: {member.bio}
            </Typography>
          </CardContent>
          <Box display="flex" justifyContent="center" mt={2} mb={2}>
          <Button variant="contained" color="primary" onClick={onReset}>Back</Button>
          </Box>
        </Card>
      ) : (
        <Typography variant="h5" component="h1">
          Member not yet available
        </Typography>
      )}
    </Box>
  );
};