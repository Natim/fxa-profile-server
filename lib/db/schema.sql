CREATE TABLE IF NOT EXISTS avatar_providers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(32) NOT NULL,
  UNIQUE INDEX avatar_providers_name(name)
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS avatars (
  id BINARY(16) PRIMARY KEY,
  url VARCHAR(256) NOT NULL,
  userId BINARY(16) NOT NULL,
  INDEX avatars_user_id(userId),
  providerId INT NOT NULL,
  FOREIGN KEY (providerId) REFERENCES avatar_providers(id) ON DELETE CASCADE
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS avatar_selected (
  userId BINARY(16) NOT NULL PRIMARY KEY,
  avatarId BINARY(16) NOT NULL,
  FOREIGN KEY (avatarId) REFERENCES avatars(id) ON DELETE CASCADE
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;
