const messages = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

const createError = (status, message = messages[status]) => {
  const newError = new Error(message);
  newError.status = status;
  return newError;
};

const updateError = (status, error) => {
  if (!error.status) {
    error.status = status;
  }
  return error;
};

/* 
 == mongo`s errors codes==
 13348 code connection died
 10022 code SyncClusterConnection::getMore not supported yet
 13053 code help failed: 1help
 13054 code write $cmd not supported in SyncClusterConnection::query for:
 13105 code
 13119 code SyncClusterConnection::insert obj has to have an _id:
 13120 code SyncClusterConnection::update upsert query needs _id
 13397 code SyncClusterConnection::say prepare failed:
 15848 code sync cluster of sync clusters?
 16743 code
 16744 code
 8001 code SyncClusterConnection write op failed:
 8002 code all servers down/unreachable when querying:
 8003 code SyncClusterConnection::insert prepare failed:
 8004 code SyncClusterConnection needs 3 servers
 8005 code SyncClusterConnection::update prepare failed:
 8006 code SyncClusterConnection::call can only be used directly for dbQuery
 8007 code SyncClusterConnection::call can't handle $cmd
 8008 code all servers down/unreachable:
 8020 code SyncClusterConnection::remove prepare failed:
 */
module.exports = {
  createError,
  updateError,
};
