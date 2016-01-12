
###actions
- [listAllActions](https://developers.digitalocean.com/documentation/v2#list-all-actions)

`api.actions.listAllActions(options)`
- [retrieveExistingAction](https://developers.digitalocean.com/documentation/v2#retrieve-an-existing-action)

`api.actions.retrieveExistingAction(actionId, options)`

###domains
- [listAllDomains](https://developers.digitalocean.com/documentation/v2#list-all-domains)

`api.domains.listAllDomains(options)`
- [createNewDomain](https://developers.digitalocean.com/documentation/v2#create-a-new-domain)

`api.domains.createNewDomain(options)`
- [retrieveExistingDomain](https://developers.digitalocean.com/documentation/v2#retrieve-an-existing-domain)

`api.domains.retrieveExistingDomain(domainName, options)`
- [deleteDomain](https://developers.digitalocean.com/documentation/v2#delete-a-domain)

`api.domains.deleteDomain(domainName, options)`

###domainRecords
- [listAllDomainRecords](https://developers.digitalocean.com/documentation/v2#list-all-domain-records)

`api.domainRecords.listAllDomainRecords(domainName, options)`
- [createNewDomainRecord](https://developers.digitalocean.com/documentation/v2#create-a-new-domain-record)

`api.domainRecords.createNewDomainRecord(domainName, options)`
- [retrieveExistingDomainRecord](https://developers.digitalocean.com/documentation/v2#retrieve-an-existing-domain-record)

`api.domainRecords.retrieveExistingDomainRecord(domainName, recordId, options)`
- [updateDomainRecord](https://developers.digitalocean.com/documentation/v2#update-a-domain-record)

`api.domainRecords.updateDomainRecord(domainName, recordId, options)`
- [deleteDomainRecord](https://developers.digitalocean.com/documentation/v2#delete-a-domain-record)

`api.domainRecords.deleteDomainRecord(domainName, recordId, options)`

###droplets
- [createNewDroplet](https://developers.digitalocean.com/documentation/v2#create-a-new-droplet)

`api.droplets.createNewDroplet(options)`
- [createMultipleDroplets](https://developers.digitalocean.com/documentation/v2#create-multiple-droplets)

`api.droplets.createMultipleDroplets(options)`
- [retrieveExistingDropletById](https://developers.digitalocean.com/documentation/v2#retrieve-an-existing-droplet-by-id)

`api.droplets.retrieveExistingDropletById(dropletId, options)`
- [listAllDroplets](https://developers.digitalocean.com/documentation/v2#list-all-droplets)

`api.droplets.listAllDroplets(options)`
- [listAllAvailableKernelsForDroplet](https://developers.digitalocean.com/documentation/v2#list-all-available-kernels-for-a-droplet)

`api.droplets.listAllAvailableKernelsForDroplet(dropletId, options)`
- [listSnapshotsForDroplet](https://developers.digitalocean.com/documentation/v2#list-snapshots-for-a-droplet)

`api.droplets.listSnapshotsForDroplet(dropletId, options)`
- [listBackupsForDroplet](https://developers.digitalocean.com/documentation/v2#list-backups-for-a-droplet)

`api.droplets.listBackupsForDroplet(dropletId, options)`
- [listActionsForDroplet](https://developers.digitalocean.com/documentation/v2#list-actions-for-a-droplet)

`api.droplets.listActionsForDroplet(dropletId, options)`
- [deleteDroplet](https://developers.digitalocean.com/documentation/v2#delete-a-droplet)

`api.droplets.deleteDroplet(dropletId, options)`
- [listNeighborsForDroplet](https://developers.digitalocean.com/documentation/v2#list-neighbors-for-a-droplet)

`api.droplets.listNeighborsForDroplet(options)`
- [listAllDropletNeighbors](https://developers.digitalocean.com/documentation/v2#list-all-droplet-neighbors)

`api.droplets.listAllDropletNeighbors(options)`
- [listDropletUpgrades](https://developers.digitalocean.com/documentation/v2#list-droplet-upgrades)

`api.droplets.listDropletUpgrades(options)`

###dropletActions
- [enableBackups](https://developers.digitalocean.com/documentation/v2#enable-backups)

`api.dropletActions.enableBackups(dropletId, options)`
- [disableBackups](https://developers.digitalocean.com/documentation/v2#disable-backups)

`api.dropletActions.disableBackups(dropletId, options)`
- [rebootDroplet](https://developers.digitalocean.com/documentation/v2#reboot-a-droplet)

`api.dropletActions.rebootDroplet(dropletId, options)`
- [powerCycleDroplet](https://developers.digitalocean.com/documentation/v2#power-cycle-a-droplet)

`api.dropletActions.powerCycleDroplet(dropletId, options)`
- [shutdownDroplet](https://developers.digitalocean.com/documentation/v2#shutdown-a-droplet)

`api.dropletActions.shutdownDroplet(dropletId, options)`
- [powerOffDroplet](https://developers.digitalocean.com/documentation/v2#power-off-a-droplet)

`api.dropletActions.powerOffDroplet(dropletId, options)`
- [powerOnDroplet](https://developers.digitalocean.com/documentation/v2#power-on-a-droplet)

`api.dropletActions.powerOnDroplet(dropletId, options)`
- [restoreDroplet](https://developers.digitalocean.com/documentation/v2#restore-a-droplet)

`api.dropletActions.restoreDroplet(dropletId, options)`
- [passwordResetDroplet](https://developers.digitalocean.com/documentation/v2#password-reset-a-droplet)

`api.dropletActions.passwordResetDroplet(dropletId, options)`
- [resizeDroplet](https://developers.digitalocean.com/documentation/v2#resize-a-droplet)

`api.dropletActions.resizeDroplet(dropletId, options)`
- [rebuildDroplet](https://developers.digitalocean.com/documentation/v2#rebuild-a-droplet)

`api.dropletActions.rebuildDroplet(dropletId, options)`
- [renameDroplet](https://developers.digitalocean.com/documentation/v2#rename-a-droplet)

`api.dropletActions.renameDroplet(dropletId, options)`
- [changeKernel](https://developers.digitalocean.com/documentation/v2#change-the-kernel)

`api.dropletActions.changeKernel(dropletId, options)`
- [enableIpv6](https://developers.digitalocean.com/documentation/v2#enable-ipv6)

`api.dropletActions.enableIpv6(dropletId, options)`
- [enablePrivateNetworking](https://developers.digitalocean.com/documentation/v2#enable-private-networking)

`api.dropletActions.enablePrivateNetworking(dropletId, options)`
- [snapshotDroplet](https://developers.digitalocean.com/documentation/v2#snapshot-a-droplet)

`api.dropletActions.snapshotDroplet(dropletId, options)`
- [upgradeDroplet](https://developers.digitalocean.com/documentation/v2#upgrade-a-droplet)

`api.dropletActions.upgradeDroplet(dropletId, options)`
- [retrieveDropletAction](https://developers.digitalocean.com/documentation/v2#retrieve-a-droplet-action)

`api.dropletActions.retrieveDropletAction(dropletId, actionId, options)`

###images
- [listAllImages](https://developers.digitalocean.com/documentation/v2#list-all-images)

`api.images.listAllImages(options)`
- [retrieveExistingImageById](https://developers.digitalocean.com/documentation/v2#retrieve-an-existing-image-by-id)

`api.images.retrieveExistingImageById(imageId, options)`
- [retrieveExistingImageBySlug](https://developers.digitalocean.com/documentation/v2#retrieve-an-existing-image-by-slug)

`api.images.retrieveExistingImageBySlug(imageSlug, options)`
- [listAllActionsForImage](https://developers.digitalocean.com/documentation/v2#list-all-actions-for-an-image)

`api.images.listAllActionsForImage(imageId, options)`
- [updateImage](https://developers.digitalocean.com/documentation/v2#update-an-image)

`api.images.updateImage(imageId, options)`
- [deleteImage](https://developers.digitalocean.com/documentation/v2#delete-an-image)

`api.images.deleteImage(imageId, options)`

###imageActions
- [transferImage](https://developers.digitalocean.com/documentation/v2#transfer-an-image)

`api.imageActions.transferImage(imageId, options)`
- [convertImageToSnapshot](https://developers.digitalocean.com/documentation/v2#convert-an-image-to-a-snapshot)

`api.imageActions.convertImageToSnapshot(imageId, options)`
- [retrieveExistingImageAction](https://developers.digitalocean.com/documentation/v2#retrieve-an-existing-image-action)

`api.imageActions.retrieveExistingImageAction(imageId, imageActionId, options)`

###sshKeys
- [listAllKeys](https://developers.digitalocean.com/documentation/v2#list-all-keys)

`api.sshKeys.listAllKeys(options)`
- [createNewKey](https://developers.digitalocean.com/documentation/v2#create-a-new-key)

`api.sshKeys.createNewKey(options)`
- [retrieveExistingKey](https://developers.digitalocean.com/documentation/v2#retrieve-an-existing-key)

`api.sshKeys.retrieveExistingKey(keyId, options)`
- [updateKey](https://developers.digitalocean.com/documentation/v2#update-a-key)

`api.sshKeys.updateKey(sshKeyId, options)`
- [destroyKey](https://developers.digitalocean.com/documentation/v2#destroy-a-key)

`api.sshKeys.destroyKey(keyId, options)`

###regions
- [listAllRegions](https://developers.digitalocean.com/documentation/v2#list-all-regions)

`api.regions.listAllRegions(options)`

###sizes
- [listAllSizes](https://developers.digitalocean.com/documentation/v2#list-all-sizes)

`api.sizes.listAllSizes(options)`

###floatingIps
- [listAllFloatingIps](https://developers.digitalocean.com/documentation/v2#list-all-floating-ips)

`api.floatingIps.listAllFloatingIps(options)`
- [createNewFloatingIpAssignedToDroplet](https://developers.digitalocean.com/documentation/v2#create-a-new-floating-ip-assigned-to-a-droplet)

`api.floatingIps.createNewFloatingIpAssignedToDroplet(options)`
- [createNewFloatingIpReservedToRegion](https://developers.digitalocean.com/documentation/v2#create-a-new-floating-ip-reserved-to-a-region)

`api.floatingIps.createNewFloatingIpReservedToRegion(options)`
- [retrieveExistingFloatingIp](https://developers.digitalocean.com/documentation/v2#retrieve-an-existing-floating-ip)

`api.floatingIps.retrieveExistingFloatingIp(floatingIpAddr, options)`
- [deleteFloatingIps](https://developers.digitalocean.com/documentation/v2#delete-a-floating-ips)

`api.floatingIps.deleteFloatingIps(floatingIpAddr, options)`

###floatingIpActions
- [assignFloatingIpToDroplet](https://developers.digitalocean.com/documentation/v2#assign-a-floating-ip-to-a-droplet)

`api.floatingIpActions.assignFloatingIpToDroplet(floatingIpAddr, options)`
- [unassignFloatingIp](https://developers.digitalocean.com/documentation/v2#unassign-a-floating-ip)

`api.floatingIpActions.unassignFloatingIp(floatingIpAddr, options)`
- [listAllActionsForFloatingIp](https://developers.digitalocean.com/documentation/v2#list-all-actions-for-a-floating-ip)

`api.floatingIpActions.listAllActionsForFloatingIp(floatingIp, options)`
- [retrieveExistingFloatingIpAction](https://developers.digitalocean.com/documentation/v2#retrieve-an-existing-floating-ip-action)

`api.floatingIpActions.retrieveExistingFloatingIpAction(floatingIp, actionId, options)`
